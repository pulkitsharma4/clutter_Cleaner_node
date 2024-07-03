import fsn from 'fs'
import fs from 'fs/promises'
import path from 'path'


//reading files of the folder.
const location = "E:\\Projects\\clutter_Cleaner_node";
let files = await fs.readdir(location);

// console.log(files)

//getting files extension.

for (const items of files) {

    console.log('running for', items);
    let ext = items.split(".")[items.split(".").length-1]

    //condition for excluding json and json extension
    //condition for excluding folders

    if(ext!="js" && ext!="json" && items.split(".").length > 1){


        if(fsn.existsSync(path.join(location, ext))){
            fs.rename(path.join(location, items), path.join(location, ext, items))
        }

        else{
            fs.mkdir(ext)
            fs.rename(path.join(location, items), path.join(location, ext, items))
        }
    }

    console.log(ext);
    
}

