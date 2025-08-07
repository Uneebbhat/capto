"use client";

import axios from "axios";
import useFormHandler from "../useFormHandler";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SignupFormData } from "@/types/UserTypes";
import { HandleOnSubmit } from "@/types/FormTypes";

interface SignupResponseData {
  user: {};
  message: string;
  error: string | null;
}

const useSignup = () => {
  const router = useRouter();

  const { formData, handleOnChange, loading, setLoading, setFormData } =
    useFormHandler<SignupFormData>({
      username: "",
      email: "",
      password: "",
    });

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post<SignupResponseData>(
        "/api/signup",
        formData
      );
      setFormData({
        username: "",
        email: "",
        password: "",
      });

      console.log(data.message);

      toast.success(data.message, {
        duration: 3000,
      });

      router.push("/");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(
          error.response.data.error || "An error occurred during signup."
        );
        toast.error(
          error.response.data.error || "An error occurred during signup.",
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

export default useSignup;
