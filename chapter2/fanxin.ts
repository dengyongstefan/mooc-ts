interface Ref<T> {
  value: T;
}
let ref: Ref<string> = {
  value: "123",
};

// 泛型默认值
class ArrayList<T = any> {
  arr: Array<T>;
  index: number = 0;
  constructor() {
    this.arr = [];
  }
  add(ele: T) {
    this.arr.push(ele);
  }
  get(index: number) {
    return this.arr[index];
  }
}

let arr = new ArrayList();

class Order {
  orderId!: number;
  orderName!: string;
  static count: number = 0;
  printOrd() {}
  static getCount() {}
}

type OrderInstanceAttrName = keyof Order;
let order: OrderInstanceAttrName = "orderId";

// 泛型约束
// t必须满足object类型
type InstanceKeys<T extends object> = keyof T;
type OrderInstanceAttrName2 = InstanceKeys<Order>;
// type OrderInstanceAttrName3= InstanceKeys<string>

// 函数重载
// 重载签名-实现签名

type Message = {
  id:number,
  type:MessageType,
  message:string
}

enum MessageType {
  'IMAGE' = 'image',
  'AUDIO' = 'audio'
}

let message:Message[] = [
  {
    id: 1,
    type: MessageType.IMAGE,
    message: "hello",
  },
  {
    id: 2,
    type: MessageType.AUDIO,
    message: "hello",
  },
  {
    id: 3,
    type: MessageType.AUDIO,
    message: "hello",
  },
];

function searchMsg(condition:MessageType):Message[]; // 重载签名：没有函数体
function searchMsg(condition:number):Message | undefined;
function searchMsg(condition:MessageType|number):Message | Message[] | undefined{ // 实现签名
  if(typeof condition === 'number'){
    return message.find((msg) => condition === msg.id)
  }else{
    return message.filter((msg)=> msg.type === condition)
  }
}

const a = searchMsg(1)
const id = a?.id

// 泛型函数
// 将泛型当做一种参数
function quickSort<T>(arr:Array<T>):T[]{
  return arr
}

// 泛型函数重载

//泛型工厂函数
class CommercialBank {
  public address: string = "beijin"
  public name: string =  "wangwu"
  static count: number
  constructor (name: string, address: string) {
    this.address = address
    this.name= name
  }
  loan (): void {
    console. log(this.name +'loan')
  }
}

// 代表构造函数
type ConstructorType = new (...args:any)=>CommercialBank
let CommercialBankInstance:ConstructorType=CommercialBank
new CommercialBankInstance('wangwu','tianjin')

interface constructorInter {
  new (...args:any):CommercialBank
}
let CommercialBankInstance2:constructorInter=CommercialBank
new CommercialBankInstance2('wangwu','tianjin')

function create(ConstructorType:ConstructorType){}


// 交叉类型和通用交叉方法

type  oa = {
  a:string
  c:string
}
type  ob = {
  c:string
  d:string
}

type oc = oa & ob