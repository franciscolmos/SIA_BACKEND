import { Injectable } from '@nestjs/common';
const spawn = require("child_process").spawn;
const { PythonShell } = require('python-shell');


@Injectable()
export class TestService {
  runProgram(): string {
    // const pythonProcess = spawn('python3',["/home/franciscolmos/SIA-BACKEND/perceptron.py"]);

    // pythonProcess.stdout.on("data", (data) => {
    //   console.log(`Python stdout: ${data}`);
    // });
    
    // pythonProcess.stderr.on("data", (data) => {
    //   console.error(`Python stderr: ${data}`);
    // });
    
    // pythonProcess.on("close", (code) => {
    //   console.log(`Python process exited with code ${code}`);
    // });

    // return pythonProcess;

    // Opciones de configuración para PythonShell
    const options = {
      mode: 'json', // Utilizar el modo JSON para comunicación
      pythonPath: 'python3', // Ruta al ejecutable de Python
      pythonOptions: ['-u'], // Opciones adicionales de Python
      scriptPath: '/home/gaboty/Facu/SIA_BACKEND/', // Ruta al directorio que contiene perceptron.py
      args: [] // Argumentos opcionales para el script Python
    };

    // Crear una instancia de PythonShell con las opciones
    const pyshell = new PythonShell('perceptron.py', options);

    // Manejar la salida del script Python (que debe ser un objeto JSON)
    pyshell.on('message', (message) => {
      const perceptron_json = message;
      console.log('Objeto perceptron_actual obtenido:', perceptron_json);
    });

    // Manejar errores
    pyshell.on('error', (error) => {
      console.error('Error al ejecutar el script Python:', error);
    });

    // Finalizar el proceso de PythonShell
    pyshell.end((err, code, signal) => {
      if (err) {
        console.error('Error al finalizar el script Python:', err);
      }
      console.log('Proceso de Python finalizado con código de salida:', code);
    });
    return "hola"
  }
}
