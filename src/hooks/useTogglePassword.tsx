"use client"

import { useState } from 'react'

const useTogglePassword = () => {
  const [isPassword, setIsPassword] = useState<boolean>(false)

  const handleTogglePassword = (): void => {
    setIsPassword(!isPassword)
  }

  return { isPassword, handleTogglePassword }
}

export default useTogglePassword