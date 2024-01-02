// // static/upload.js
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('upload-form');
//     const progressBar = document.getElementById('progress-bar');
//     const message = document.getElementById('message');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         // const fileInput = form.querySelector('input[type="file"]');
//         const fileInput = document.getElementById('fileInput')
//         const file = fileInput.files[0];
//         // const file = e.target.files
//         console.log("file: ", file)
//         if (!file) {
//             message.textContent = 'Please select a file.';
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);

//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', '/api/upload', true);

//         xhr.upload.addEventListener('progress', function (event) {
//             if (event.lengthComputable) {
//                 const percentComplete = (event.loaded / event.total) * 100;
//                 progressBar.style.width = percentComplete + '%';
//                 progressBar.textContent = percentComplete.toFixed(2) + '%';
//             }
//         });

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     message.textContent = 'File uploaded successfully.';
//                 } else {
//                     message.textContent = 'Error uploading the file.';
//                 }
//             }
//         };

//         xhr.send(formData);
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    const uploadBtn = document.getElementById('upload-button');
    const progressBar = document.getElementById('progress-bar');
    const uploadBtnTxt = document.getElementById('upload-percentage-text');

    uploadBtn.addEventListener('click', function () {

        // const fileInput = form.querySelector('input[type="file"]');
        // const file = fileInput.files[0];

        const fileInput = document.getElementById('message')
        const file = fileInput.files[0];
        // console.log('file: ', file)

        if (!file) {
            // message.textContent = 'Please select a file.';
            alert("Please select a file.")
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        console.log(formData)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/upload', true);

        xhr.upload.addEventListener('progress', function (event) {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                progressBar.style.width = percentComplete + '%';
                // progressBar.textContent = percentComplete.toFixed(2) + '%';
            }
        });

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    uploadBtnTxt.textContent = 'File uploaded successfully!';
                    uploadBtnTxt.classList.add("text-white")
                } else {
                    uploadBtnTxt.textContent = 'x Error uploading the file. x';
                    uploadBtnTxt.classList.add("text-red-500")
                }
            }
        };

        xhr.send(formData);
    })
})