package main

import (
	"io"
	"io/ioutil"
	"os"

	"golang.org/x/crypto/ssh"
)

func PublicKeyFile(file string) ssh.AuthMethod {
	buffer, err := ioutil.ReadFile(file)
	if err != nil {
		return nil
	}

	key, err := ssh.ParsePrivateKey(buffer)
	if err != nil {
		return nil
	}
	return ssh.PublicKeys(key)
}

func main() {
	sshConfig := &ssh.ClientConfig{
		User: "vagrant",
		Auth: []ssh.AuthMethod{
			//PublicKeyFile("/Users/jimboy/.ssh/id_rsa"),
			ssh.Password("vagrant"),
		},
	}

	connection, err := ssh.Dial("tcp", "192.168.22.10:22", sshConfig)
	if err != nil {
		panic(err)
	}

	session, err := connection.NewSession()
	if err != nil {
		panic(err)
	}

	modes := ssh.TerminalModes{
		ssh.ECHO:          0,
		ssh.TTY_OP_ISPEED: 14400,
		ssh.TTY_OP_OSPEED: 14400,
	}
	if err := session.RequestPty("xterm", 80, 40, modes); err != nil {
		session.Close()
		panic(err)
	}

	stdin, err := session.StdinPipe()
	if err != nil {
		panic(err)
	}
	go io.Copy(stdin, os.Stdin)

	stdout, err := session.StdoutPipe()
	if err != nil {
		panic(err)
	}
	go io.Copy(os.Stdout, stdout)

	stderr, err := session.StderrPipe()
	if err != nil {
		panic(err)
	}
	go io.Copy(os.Stderr, stderr)

	_ = session.Run("ls -l $LC_USR_DIR")
}
