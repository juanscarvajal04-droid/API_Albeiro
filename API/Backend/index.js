import express from 'express';
import swaggerUI from "swagger-ui-express";
const port = 3306

app.use("/api_do",swaggerUI.serve,swaggerUI.setup())