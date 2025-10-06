import figlet from 'figlet';
import fs from 'fs/promises';
const file1 = './text.txt';
const file2 = './save.txt';
async function saveText(text,file1,file2) {
  try {
    await fs.writeFile(file1, text, "utf8")
    const textR = await  figlet.text(await fs.readFile(file1, "utf-8"))
    console.log(textR)
    await fs.writeFile(file2,textR,"utf8")
  } catch (error)
  {
    console.log(error)
  }

}

saveText('hello world', file1, file2)

