Here’s a **`README.md`** for your AWS Lambda + TypeScript + MongoDB CRUD API project.
I’ll keep it clean, beginner-friendly, and GitHub-ready so anyone can follow along from clone to deploy.

---

```markdown
# AWS Lambda + TypeScript + MongoDB CRUD API

A **serverless CRUD API** built using:
- **AWS Lambda** + **API Gateway**
- **TypeScript (Node.js)**
- **MongoDB Atlas**
- **Serverless Framework**

This project demonstrates how to create, read, update, and delete data in MongoDB using AWS Lambda functions, deployable with the Serverless Framework.

---

## 📌 Features
- Fully serverless — no servers to manage
- TypeScript for type safety
- MongoDB connection pooling for Lambda
- API Gateway endpoints for CRUD operations
- Easily deployable to AWS

---

## 📂 Project Structure
```

.
├── src/
│   ├── lib/
│   │   └── mongo.ts          # MongoDB connection helper
│   └── functions/
│       ├── createItem.ts
│       ├── listItems.ts
│       ├── getItem.ts
│       ├── updateItem.ts
│       └── deleteItem.ts
├── serverless.yml            # Serverless Framework config
├── tsconfig.json
├── package.json
└── README.md

````

---

## 🛠 Prerequisites

1. **AWS Account** — [Sign up here](https://aws.amazon.com/)
2. **MongoDB Atlas** account — [Sign up here](https://www.mongodb.com/cloud/atlas)
3. **AWS CLI** installed — [Install Guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
4. **Node.js** (v18+) & npm installed
5. **Serverless Framework** installed:
   ```bash
   npm install -g serverless
````

---

## 🔑 AWS Setup (IAM & Credentials)

### Create IAM User

1. Open **AWS Console** → Go to **IAM** service.
2. Click **Users** → **Add user**.
3. Set a name: `serverless-deployer`.
4. Enable **Access key - Programmatic access**.
5. Attach policy: `AdministratorAccess` (or minimum required permissions).
6. Create user & download the CSV file containing:

   * `AWS_ACCESS_KEY_ID`
   * `AWS_SECRET_ACCESS_KEY`

### Configure AWS CLI

```bash
aws configure
```

Fill in:

```
AWS Access Key ID: <your_key>
AWS Secret Access Key: <your_secret>
Default region name: us-east-1
Default output format: json
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd lambda-mongo-ts
```

Install dependencies:

```bash
npm install
```

Create a `.env` file (optional for local dev):

```env
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net
MONGODB_DB=itemsdb
```

---

## 🚀 Deployment

Deploy to AWS:

```bash
npx serverless deploy
```

The output will include your API endpoint, e.g.:

```
endpoints:
  POST - https://abc123.execute-api.us-east-1.amazonaws.com/items
  GET  - https://abc123.execute-api.us-east-1.amazonaws.com/items
```

---

## 📡 API Endpoints

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | `/items`      | Create an item    |
| GET    | `/items`      | List all items    |
| GET    | `/items/{id}` | Get an item by ID |
| PUT    | `/items/{id}` | Update an item    |
| DELETE | `/items/{id}` | Delete an item    |

---

## 🧪 Testing

Example create request:

```bash
curl -X POST https://<your-endpoint>/items \
     -H "Content-Type: application/json" \
     -d '{"name": "Laptop", "price": 1200}'
```

Example get request:

```bash
curl https://<your-endpoint>/items
```

---

## 📌 Notes & Best Practices

* Always **reuse MongoDB connections** in Lambda (see `mongo.ts`) to avoid connection storms.
* Keep Lambda and MongoDB in the same AWS region for lower latency.
* Store secrets in **AWS Secrets Manager** for production.
* Use **serverless-offline** for local development:

  ```bash
  npx serverless offline
  ```

---

## 📜 License

This project is licensed under the MIT License.

```

---

If you want, I can **add code snippets for all CRUD handlers** inside this README so that it’s a **self-contained tutorial repo**.  
That way, your GitHub repo will be directly usable by anyone cloning it.  

Do you want me to add that full code to the README?
```
