interface Category {
  id: number;
  name: string;
}

interface MidCategory extends Category {
  imageUrl: string;
}
interface Question {
  id: number;
  question: string;
}
