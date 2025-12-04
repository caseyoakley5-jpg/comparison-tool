export async function handler(event) {
const recordId = event.queryStringParameters.recordId;

if (!recordId) {
return { statusCode: 400, body: "Missing recordId" };
}

// Correct Base + Table IDs
const base = "appAfkgyPDINSxxwF";
const table = "tblGQ4uQnEdidma2C";
const pat = process.env.AIRTABLE_PAT;

const url = `https://api.airtable.com/v0/${base}/${table}/${recordId}`;

try {
const response = await fetch(url, {
headers: {
Authorization: `Bearer ${pat}`,
},
});

const data = await response.json();

return {
statusCode: response.status,
body: JSON.stringify(data),
};
} catch (error) {
return {
statusCode: 500,
body: JSON.stringify({ error: error.message }),
};
}
}

