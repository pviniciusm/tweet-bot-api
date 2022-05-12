import { Request, Response, Router } from 'express';
import { SetQuotedTweet, SetSingleTweet } from '../../domain/usecases/set-tweet-usecase';
import {
  SetQuotedTweetController,
  SetSingleTweetController,
} from '../controller/set-tweet-controllers';

const setUsecase = new SetSingleTweet();
const setQuoteUsecase = new SetQuotedTweet();
export class TweetRoutes {
  static getRoutes() {
    const router = Router();

    router.post('/', (req: Request, res: Response) => {
      return new SetSingleTweetController(setUsecase).handle(req, res);
    });

    router.post('/quote', (req: Request, res: Response) => {
      return new SetQuotedTweetController(setQuoteUsecase).handle(req, res);
    });

    return router;
  }
}
