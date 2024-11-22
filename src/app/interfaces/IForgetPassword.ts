export interface ISendEmailForgetPasswordRequest {
  email: string;
}

export interface ISendEmailForgetPasswordResponse {
  message: string;
  id: number;
}

export interface IValidateHashCodeRequest {
  hash: string;
  userId: string;
}

export interface IValidateHashCodeResponse {
  _id: string,
  hash: string
  userId: string
  endDate: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface IValidateNewPasswordRequest {
  newPassword: string;
  passwordConfirm: string;
}

export interface IValidateNewPasswordResponse {
  message: string;
}
