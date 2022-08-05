interface Mobile {
  charging: () => void;
  call(): void;
}
interface Laptop {
  charging(): void;
  work(): void;
}
class MobileImpl implements Mobile {
  charging = () => {
    console.log(`Chqrging`);
  };
  call = () => {
    console.log(`Calling`);
  };
}
let gadgetDet = (): Mobile => {
  return new MobileImpl();
};
let mob: Mobile = gadgetDet();
mob.charging();
mob.call();

let itemDetails = (): Mobile | Laptop => {
  return {
    charging: () => {
      console.log(`Chqrging`);
    },
    call: () => {
      console.log(`Calling`);
    },
    work: () => {
      console.log(`Working`);
    },
  };
};
let mob1: any = itemDetails();
mob1.call();
mob1.charging();
