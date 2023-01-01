export interface UserTypes {
  datum: {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      avatar: string;
      gender: string;
      bvn: string;
      address: string;
      currency: string;
    };
    guarantor: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      gender: string;
      address: string;
    };
    loan: {
      loanAmount: string;
      loanTenure: string;
      loanInterest: string;
      loanStatus: string;
      loanType: string;
      loanDate: string;
      loanDueDate: string;
      loanRepaymentDate: string;
      loanRepaymentAmount: string;
      loanRepaymentStatus: string;
    };
    accountBalance: string;
    accountNumber: string;
    socials: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
    education: {
      level: string;
      employmentStatus: string;
      sector: string;
      duration: string;
      officeEmail: string;
      monthlyIncome: string[];
      loanRepayment: string;
    };
    id: number;
  };
}
