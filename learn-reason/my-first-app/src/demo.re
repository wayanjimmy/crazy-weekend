type schoolPerson = Teacher | Director | Student string;

let greeting = 
    switch stranger {
        | Teacher => "Hey professor!"
        | Director => "Hello director."
        | Student "Richard" => "Still here ricky"
        | Student anyOtherName => "Hey, " ^ anyOtherName ^ "."
    };

Js.log greeting;