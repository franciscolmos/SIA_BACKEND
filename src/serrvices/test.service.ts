import { Injectable } from '@nestjs/common';
const spawn = require("child_process").spawn;


@Injectable()
export class TestService {
  runProgram(): string {
    const pythonProcess = spawn('python3',["/home/franciscolmos/SIA-BACKEND/perceptron.py"]);

    pythonProcess.stdout.on("data", (data) => {
      console.log(`Python stdout: ${data}`);
    });
    
    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python stderr: ${data}`);
    });
    
    pythonProcess.on("close", (code) => {
      console.log(`Python process exited with code ${code}`);
    });

    return pythonProcess;
  }
}
