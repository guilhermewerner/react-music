import { PermissionsAndroid } from "react-native";

async function RequestStoragePermission() {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("READ_EXTERNAL_STORAGE GRANTED");
        } else {
            console.log("READ_EXTERNAL_STORAGE DENYED");
        }
    } catch (error) {
        console.warn(error);
    }
}

export default {
    Request: () => {
        RequestStoragePermission();
    }
};
