import java.util.Scanner;

public class Geje
{
    static int banyakdata;
    static int data[];

    public static void main (String[] args)
    {
        System.out.println ("===INSERTION SORT===");
        start();
        running();
        end();
    }

    public static int inputdata()
    {
        Scanner in= new Scanner (System.in);
        int n= in.nextInt ();
        return n;
    }

    public static void start ()
    {
        do {
            System.out.print ("Banyak Data : ");
            banyakdata= inputdata();
            if (banyakdata<=0) System.out.println ("Try Again !");
        }while (banyakdata<=0);

        data = new int[banyakdata];

        for (int i=0;i<banyakdata;i++)
        {
            System.out.print ("Data["+(i+1)+"]= ");
            data[i]= inputdata();
        }

        System.out.println ("\n\nData Awal : ");

        for (int i=0;i<banyakdata; i++)
        {
            System.out.print (data[i]+" ");
        }
    }

    public static void running()
    {
        //ni pake bubble sort kyana algomu yang tadi salah
        /*
        for(int i=0; i<banyakdata; i++)
        {
            for(int j=0; j<banyakdata-i-1; j++)
            {
                if(data[j] > data[j+1])
                {
                    int simpan = data[j];
                    data[j] = data[j+1];
                    data[j+1] = simpan;
                }
            }
        }
        yang dibawa tu insertion
        */
        int tmp, i, j;

        for(j=1; j<banyakdata; j++)
        {
            i = j-1;
            tmp = data[j];
            while((i>=0) &&(tmp<data[i]))
            {
                data[i+1] = data[i];
                i--;
            }
            data[i+1] = tmp;
        }
    }

    public static void end()
    {
        System.out.println ("\n\nData Akhir : ");

        for (int i=0;i<banyakdata;i++)
        {
            System.out.print (data[i]+" ");
        }
    }
}