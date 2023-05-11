import axios from 'axios';

const BASE_URL = 'localhost:8000/api/user';

async function uploadFiles(files) {
  const formData = new FormData();

  files.forEach((file, index) => {
    formData.append(`file${index + 1}`, file);
  });

  const response = await axios.post(`${BASE_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}

async function submitData(data) {
  const response = await axios.post(`${BASE_URL}/profile`, data);
  return response.data;
}

export { uploadFiles, submitData };
