export interface IWindowOptions {
  transparent: boolean;
  frame: boolean;
  titleBarStyle: 'hidden' | 'hiddenInset' | 'customButtonsOnHover' | 'default';
  size: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
}
