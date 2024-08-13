import axiox from "axios";


const requset = axiox.create({
    baseURL: "http://localhost:8000"
});

export default requset;