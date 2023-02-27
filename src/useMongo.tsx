import { Event } from "./Attendee";
import * as Realm from "realm-web";
import { useEffect, useState } from "react";

type DocumentOf<T> = T & { _id: string };
export const useMongo = () => {
  const [user, setUser] = useState<Realm.User | null>(null);

  useEffect(() => {
    const go = async () => {
      const app = new Realm.App({ id: "checkin-demo-hnayj" });
      const c = Realm.Credentials.anonymous();
      c;
      setUser(await app.logIn(c));
    };
    go();
  }, []);

  useEffect(() => {
    const go = async () => {
      if (user) {
        const apiKey = await user.apiKeys.create("abc");
        console.log(apiKey);
        const mongo = user.mongoClient(
          `mongodb://_:${apiKey}@us-west-2.aws.realm.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=checkin-demo-hnayj:mongodb-atlas:api-key`
        );
        const collection = mongo
          .db("checkin")
          .collection<DocumentOf<Event>>("events");
        const c = await collection.find();
        console.log(c);
      }
    };
    go();
  }, [user]);
};
