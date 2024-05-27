export type Course = {
    id: string;
    trainingId: number,
    trainingName: string,
    trainingSlug: string,
    trainingType: number,
    learnersLevel: string,
    prerequisite: string,
    amount: number,
    discountAmount: number,
    onlineDiscount: number,
    imageUrl: string,
    sampleVideoUrl: string,
    syllabus: string,
    shortNote: string,
    description: string,
    perks: string,
    stack: string,
    domainId: number,
    category: number,
    subcategory: number,
    languageId: number,
    medium: number,
    classLink: string,
    fallon: string,
    totalHours: number,
    duration: number,
    others: string,
    eventType: number,
    activeStatus: number,
    createdBy: string,
    updatedBy: string,
    deletedBy: string,
    createdAt: string,
    updatedAt: string,
    deteledAt: string,
    trainingDomain: {
        domainId: number,
        domainName:string
    },
    language: {
        languageId: number,
        languageName: string
    }
  
    additionalAttributes: any;
  };
  

  