import React from "react";
import useFormHandler from "../useFormHandler";
import { LoginFormData } from "@/types/UserTypes";
import { HandleOnSubmit } from "@/types/FormTypes";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface LoginResponseData {
  user: {};
  message: string;
  error: string | null;
}

const useLogin = () => {
  const router = useRouter();
  const { loading, formData, setLoading, setFormData, handleOnChange } =
    useFormHandler<LoginFormData>({
      email: "",
      password: "",
    });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post<LoginResponseData>(
        "/api/login",
        formData
      );
      setFormData({
        email: "",
        password: "",
      });

      console.log(data.message);

      toast.success(data.message, {
        duration: 3000,
      });

      router.push("/dashboard");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(
          error.response.data.error || "An error occurred during login."
        );
        toast.error(
          error.response.data.error || "An error occurred during login.",
          {
            duration: 3000,
          }
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    formData,
    handleOnChange,
    handleOnSubmit,
  };
};

export default useLogin;
