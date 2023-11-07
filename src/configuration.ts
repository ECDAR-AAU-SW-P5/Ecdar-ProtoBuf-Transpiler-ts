import { exit } from "process";

export class Configuration {
    readonly init : boolean;
    readonly initIfNone : boolean;
    readonly out : string;

    constructor(){
        let index = 0;
        this.init = false;
        this.initIfNone = false;
        this.out = "./out.ts";

        while(process.argv[index] != undefined) {
            let arg = process.argv[index];
            switch (arg) {
                case "-i": 
                    this.init = true; 
                    break;
                case "-I": 
                    this.initIfNone = true; 
                    break;
                case "-o": 
                    let out = process.argv[++index]; 
                    this.out = 
                        (out != undefined 
                             ? out 
                             : console.error("Missing filename after -o"), exit(-1)
                        ) as string;
                    break;
                case "-h":
                    console.log(HELP);
                    exit(0);
            }

            index += 1;
        }
    }
}

const HELP = `
-i        -- init
-I        -- init if none
-o [file] -- output file
-h        -- opens this message

`


