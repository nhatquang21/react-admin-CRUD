import { HeaderType, Align } from '@/constants';

export type MetaLink = {
  id?: number;
  principalId: number;
  principalType: string;
  name?: number;
  link?: string;
  type: string;
  userId: string;
};

export type ProjectMapping = {
  id?: number;
  principalId: number;
  principalType: string;
  projectId: string;
};

export namespace User {
  export type Info = {
    username?: string;
    firstName?: string;
    lastName?: string;
    id?: number;
    realm?: string;
    status: string;
    accountType?: string;
    verificationToken?: string;
    activatedAt?: string;
    lastLoginAt?: string;
    identifiers?: Identifier[];
  };
  export type Identifier = {
    id?: number;
    scheme?: string;
    provider?: string;
    identifier?: string;
    verified: boolean;
    details?: string;
    userId: number;
  };
}

export type SchemaValue = {
  schema: string;
  value: string;
};

export type Token = {
  value: string;
  type: string;
};

export type SignUpRQ = {
  username: string;
  phoneNumber: string;
  email: string;
  credential: string;
};

export type SignUpRS = {
  user: User.Info;
  identifiers: User.Identifier[];
  roles: string[];
};

export namespace Auth {
  export type LoginRQ = {
    identifier: SchemaValue;
    credential: SchemaValue;
  };
  export type LoginRS = {
    userId: number;
    roleId: number;
    token: Token;
  };
}

//export type Align = 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined
//export type HeaderType = 'number' | 'currency' | 'term' | 'percent' | 'datetime' | 'array' | 'input' | 'image'

export type TableHeader = {
  id: string;
  align?: Align;
  style?: any;
  customField?: boolean;
  label?: string;
  type?: HeaderType;
  width?: number | undefined;
  fieldMapping?: string;
  format?: string;
  fullWidth?: boolean;
  subHeader?: string;
};

export type Task = {
  userRole: string;
  startAt: Date;
  endAt: Date;
  status: string;
  projectId: number;
  userId: number;
};

export type ProjectProfile = {
  name: string;
  description: string;
  address: string;
  details?: object;
  projectId: number;
};

export type ProjectMapping = {
  id: number;
  principalId: number;
  principalType: string;
  projectId: object;
};

export type WorkingDay = {
  startDate: string;
  weekend: boolean;
  duration: number;
};

export type Comment = {
  id?: number;
  principalId?: string;
  principalType?: string;
  content: string;
  userId?: number;
};

export type Project = {
  id?: number;
  code?: number;
  status: string;
  ownerId?: number;
  managerId?: number;
  parentId: number;
  profile: ProjectProfile;
  processes: Project[];
  tasks: Task[];
  metaLinks?: any[];
  files?: any[];
  createdAt?: string;
  modifiedAt?: string;
  workingDays: WorkingDay[];
  preConstructionAssets: any[];
  planningAssets: any[];
  estimateAssets: any[];
  periods?: any[];
  mappings?: ProjectMapping[];
  participants?: any[];
  references?: any[];
  textSearch?: string;
  lastProcess?: boolean;
};

export type Response<T> = {
  data?: T[];
  total?: number;
};

export type Filter<T> = {
  filter?: T;
  limit?: number;
  skip?: number;
  order?: string;
};
