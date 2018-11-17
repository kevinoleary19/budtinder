type $StonerKind = 'ELEVATED' | 'CHILL' | 'ACTIVE' | 'ARTSY';
export const StonerKind: { [k: string]: $StonerKind } = {
  ELEVATED: 'ELEVATED',
  CHILL: 'CHILL',
  ACTIVE: 'ACTIVE',
  ARTSY: 'ARTSY'
};

export interface $User {
  name: string;
  id: string;
  fbid: string;
  img: string;
  kind: $StonerKind;
}
