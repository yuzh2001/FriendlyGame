export enum AdapterType {
  Online = 'online',
}
export const Online = AdapterType.Online;

/**
 * 发送给所有在线客户端的 action 类型
 */
export enum OnlineAction {
  ActionComplete = 'actionComplete',
  Broadcast = 'broadcast',
  DelayTime = 'delayTime',
  GameInfo = 'gameInfo',
  GameOver = 'gameOver',
  Join = 'join',
  /** 上一个玩家的操作 */
  LatestAction = 'latestAction',
  NewGame = 'newGame',
  Pause = 'pause',
  Players = 'players',
  SitList = 'sitList',
  /** 代表第一把开局的游戏 */
  FirstGame = 'firstGame',
}

/**
 * P2P 消息的 action 类型
 */
export enum P2PAction {
  HandCard = 'handCard',
  UserInfo = 'userInfo',
  SitList = 'sitList',
  GameInfo = 'gameInfo',
  Deny = 'deny',
  UpgradeClient = 'upgradeClient',
}

export type Action = OnlineAction | P2PAction;
export const MaxBuyInFactor = 1000;
