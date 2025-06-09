// netlify/functions/env.js

exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // opsional, untuk CORS
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      supabaseUrl: process.env.SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY || '',
    }),
  };
};
