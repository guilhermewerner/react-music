import FileSystem from "react-native-fs";

async function GetMusics() {
    return new Promise((Resolve, Reject) => {
        ReadDirectory().then((sdCardPath) => {
            const INTERNAL_STORAGE = "file:///storage/emulated/0";
            const EXTERNAL_STORAGE = sdCardPath;

            console.log([INTERNAL_STORAGE, EXTERNAL_STORAGE]);

            let files = [];

            ReadDirectory(INTERNAL_STORAGE + "/Music").then((internalFiles) => {
                files.concat(internalFiles);

                ReadDirectory(EXTERNAL_STORAGE + "/Music").then((externalFiles) => {
                    files.concat(externalFiles);

                    Resolve(FilterMusics(files));
                });
            });
        });
    });
}

async function ReadDirectory(path) {
    return new Promise((Resolve, Reject) => {
        FileSystem.readDir(path).then((result) => {
            Resolve(result);
        });
    });
}

async function GetSdCardPath() {
    return new Promise((Resolve, Reject) => {
        FileSystem.getAllExternalFilesDirs().then((storages) => {
            Resolve(`file://${storages[1].substring(0, 18)}`);
        });
    });
}

function FilterMusics(array, files) {
    let musics = array;

    files.forEach(file => {
        if (file.isFile() && (file.name.endsWith(".mp3") || file.name.endsWith(".m4a"))) {
            musics.push({
                id: (musics.length + 1).toString(),
                title: file.name,
                url: file.path,
            });
        }
    });

    return musics;
}

export default {
    ReadDirectory,
    GetSdCardPath,
    GetMusics,
    FilterMusics
};
