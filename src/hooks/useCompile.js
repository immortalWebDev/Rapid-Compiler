import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

const useCompile = (language, code) => {
  const [processing, setProcessing] = useState(false);

  const handleCompile = async () => {
    setProcessing(true);

    const formData = {
      language_id: language.id,
      source_code: Buffer.from(code).toString("base64"),
    };

    try {
      // axios post for req
      const response = await axios.post(
        import.meta.env.VITE_RAPID_URL,
        formData,
        {
          params: { base64_encoded: "true", fields: "*" },
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Host": import.meta.env.VITE_RAPID_HOST,
            "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          },
        }
      );

      console.log("response received from server", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleCompile, processing };
};

export default useCompile;
