DAD.dragedUpload({
    element: document.querySelector(".file-upload"),
    // input: document.querySelector(".input-image"),
    start: () => console.log("Start"),
    end: (res, err) => {
        if(err === null){
            document.querySelector(".file-upload").setAttribute("data-content", res.files[0].file.name);
            console.log("Res ::: ", res);
        }else {
            console.log("Error ::: ", err);
        }
    }
});