import { ReactNode } from "react";

export interface IVoucher {
  name: string;
  type: string;
  score: number;
}

export interface ITerritory {
  name: string;
  upgrade: number;
  people: number;
  strength: number;
  nft: number;
  progressbar: number;
  specialProgressbar:boolean;
}

export interface IPage {
  name: string;
  text: string;
  children: ReactNode;
}

export interface ITask {
  title:string;
  award:number;
  subtitle:string
}

export interface IResource {
  title:string;
  count:string;
  special:boolean
  canBurnIt:boolean
}


export interface IDataString {
  name: string;
  data: string;
  gradient?: boolean;
  dashLine?: boolean;
}


export interface IUser {
  nickname: string;
  grade: string;
  specialGrade?: boolean;
}

export interface IToken {
  avatar: string
  tokenName:string
  count:string
  balanceInCrypto:string
  balanceInDollar:string
  bonusPercent:string
  
}

export interface IMessage {
  avatar: string
  name:string
  message:string
}