import fetch from "node-fetch";

export async function handler(event) {
const recordId = event.queryStringParameters.recordId;

if (!recordId) {
return { statusCode: 400, body: "Missing recordId" };
}

const base = "appAfKgyPDINSxxwF";
const table = "tblQG4uQnEdidma2C";
const pat = process.env.AIRTABLE_PAT;

const url = `https://api.airtable.com/v0/${base}/${table}/${recordId}`;

try {
const response = await fetch(url, {
headers: { Authorization: `Bearer ${pat}` },
});

const data = await response.json();

return {
statusCode: 200,
body: JSON.stringify(data),
};

} catch (err) {
return {
statusCode: 500,
body: JSON.stringify({ error: err.message }),
};
}
}

