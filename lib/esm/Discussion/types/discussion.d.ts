import { Comment } from '../../Comment/types/comment';
export interface Discussion {
    id: string;
    name: string;
    text: string;
    websiteId: string;
    comment?: Comment[];
}
