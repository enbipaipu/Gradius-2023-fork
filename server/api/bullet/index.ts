import type { DefineMethods } from 'aspida';
import type { UserId } from '../../commonTypesWithClient/branded';
import type { BulletModel, BulletModelWithPos } from '../../commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: {
      displayNumber: number;
    };
    resBody: BulletModelWithPos[];
  };
  post: {
    reqBody: {
      userId: UserId;
    };
    resBody: BulletModel | null;
  };
}>;
