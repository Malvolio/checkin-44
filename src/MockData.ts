import type { Attendee, Event } from "./Attendee";

const attendees: Attendee[] = [
  {
    id: 1,
    firstName: "Katrina",
    lastName: "Daughton",
    checkoff: {},
    notes: {
      1: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    },
  },
  {
    id: 2,
    firstName: "Sidnee",
    lastName: "Nulty",
    checkoff: {},
    notes: {
      1: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  },
  {
    id: 3,
    firstName: "Anica",
    lastName: "Quilleash",
    checkoff: {},
    notes: {
      1: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    },
  },
  {
    id: 4,
    firstName: "Aloysia",
    lastName: "Schuh",
    checkoff: {},
    notes: {
      1: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    },
  },
  {
    id: 5,
    firstName: "Ainslee",
    lastName: "Geeson",
    checkoff: {},
    notes: {
      1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    },
  },
  {
    id: 6,
    firstName: "Kurtis",
    lastName: "Clapison",
    checkoff: {},
    notes: {
      1: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    },
  },
  {
    id: 7,
    firstName: "Dermot",
    lastName: "Dullard",
    checkoff: {},
    notes: {
      1: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    },
  },
  {
    id: 8,
    firstName: "Darcee",
    lastName: "Petrashkov",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 9,
    firstName: "Kelly",
    lastName: "Durman",
    checkoff: {},
    notes: {
      1: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
  },
  {
    id: 10,
    firstName: "Clare",
    lastName: "cornhill",
    checkoff: {},
    notes: {
      1: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    },
  },
  {
    id: 11,
    firstName: "Ardine",
    lastName: "Peart",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 12,
    firstName: "Lianna",
    lastName: "Blackie",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 13,
    firstName: "Shayna",
    lastName: "Wudeland",
    checkoff: {},
    notes: {
      1: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    },
  },
  {
    id: 14,
    firstName: "Yevette",
    lastName: "McCudden",
    checkoff: {},
    notes: {
      1: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    },
  },
  {
    id: 15,
    firstName: "Lance",
    lastName: "Ferraron",
    checkoff: {},
    notes: { 1: "Phasellus in felis. Donec semper sapien a libero. Nam dui." },
  },
  {
    id: 16,
    firstName: "Waite",
    lastName: "Jewson",
    checkoff: {},
    notes: {
      1: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    },
  },
  {
    id: 17,
    firstName: "Alissa",
    lastName: "Annell",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 18,
    firstName: "Benjy",
    lastName: "Hackelton",
    checkoff: {},
    notes: {
      1: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    },
  },
  {
    id: 19,
    firstName: "Alana",
    lastName: "Stephens",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 20,
    firstName: "Camey",
    lastName: "MacMichael",
    checkoff: {},
    notes: {
      1: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    },
  },
  {
    id: 21,
    firstName: "Mel",
    lastName: "Witheridge",
    checkoff: {},
    notes: {
      1: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
  },
  {
    id: 22,
    firstName: "Hardy",
    lastName: "Como",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 23,
    firstName: "Annnora",
    lastName: "Rosenbarg",
    checkoff: {},
    notes: {
      1: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    },
  },
  {
    id: 24,
    firstName: "Alfreda",
    lastName: "Mort",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 25,
    firstName: "Flory",
    lastName: "Renfrew",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 26,
    firstName: "Bart",
    lastName: "Worwood",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 27,
    firstName: "Lorene",
    lastName: "Alessandrelli",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 28,
    firstName: "Saw",
    lastName: "Pratty",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 29,
    firstName: "Robina",
    lastName: "Raffan",
    checkoff: {},
    notes: {
      1: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    },
  },
  {
    id: 30,
    firstName: "Addie",
    lastName: "Keuneke",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 31,
    firstName: "Andrea",
    lastName: "Bezzant",
    checkoff: {},
    notes: {
      1: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    },
  },
  {
    id: 32,
    firstName: "Vilhelmina",
    lastName: "Parkin",
    checkoff: {},
    notes: {
      1: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    },
  },
  {
    id: 33,
    firstName: "Brear",
    lastName: "Hartburn",
    checkoff: {},
    notes: {
      1: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    },
  },
  {
    id: 34,
    firstName: "Bogart",
    lastName: "Corn",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 35,
    firstName: "Hazel",
    lastName: "Dilley",
    checkoff: {},
    notes: {
      1: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    },
  },
  {
    id: 36,
    firstName: "Cicely",
    lastName: "Persence",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 37,
    firstName: "Waylen",
    lastName: "Winchcombe",
    checkoff: {},
    notes: {
      1: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    },
  },
  {
    id: 38,
    firstName: "Konstantin",
    lastName: "Sweed",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 39,
    firstName: "Nicol",
    lastName: "Pedroni",
    checkoff: {},
    notes: {
      1: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    },
  },
  {
    id: 40,
    firstName: "Conroy",
    lastName: "Marini",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 41,
    firstName: "Orelie",
    lastName: "Collabine",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 42,
    firstName: "Humfrey",
    lastName: "Greenrodd",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 43,
    firstName: "Gilbertine",
    lastName: "Mengue",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 44,
    firstName: "Veda",
    lastName: "Fehners",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 45,
    firstName: "Massimiliano",
    lastName: "Crimmins",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 46,
    firstName: "Stafani",
    lastName: "Paddick",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 47,
    firstName: "Marigold",
    lastName: "Hallstone",
    checkoff: {},
    notes: { 1: "" },
  },
  {
    id: 48,
    firstName: "Harmonie",
    lastName: "Yorkston",
    checkoff: {},
    notes: { 1: "In congue. Etiam justo. Etiam pretium iaculis justo." },
  },
  {
    id: 49,
    firstName: "Woodman",
    lastName: "Simson",
    checkoff: {},
    notes: {
      1: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    },
  },
];

export const Events: Event[] = [
  {
    id: 0,
    name: "Mayachella",
    attendees,
    stations: [{ id: 1, name: "This Station" }],
  },
];
