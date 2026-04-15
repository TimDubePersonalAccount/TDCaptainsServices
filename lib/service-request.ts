export type ServiceRequestPayload = {
  name: string;
  email: string;
  phone: string;
  boatLocation: string;
  requestedService: string;
  requestedSubservices: string[];
  message: string;
};

export type GeneralInquiryPayload = {
  name: string;
  email: string;
  phone: string;
  boatLocation: string;
  message: string;
};

export type FormSubmissionResponse = {
  ok: boolean;
  message: string;
};
