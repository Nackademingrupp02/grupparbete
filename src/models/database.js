import { MongoClient, ServerApiVersion } from "mongodb"
const uri = "mongodb+srv://nackademing02:4ELTwXD8jQRlJGdG@g2.3ozytrh.mongodb.net/?retryWrites=true&w=majority&appName=G2"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }

})

async function run() {
    console.log("test");
    try {
        await client.connect()
        await client.db("admin").command({ ping: 1 })

        console.log("Pinged your deployment");
    } finally {
        await client.close()
    }

}
run().catch(console.dir)