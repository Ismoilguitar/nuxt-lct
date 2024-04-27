const express = require('express')
const app = express()
const Pool = require('pg').Pool
const cors = require('cors')
const PORT = 8181
app.use(cors())
app.use(express.json())
require('dotenv').config()
const pool = new Pool({
	user: process.env.USER_NAME,
	host: process.env.HOST_NAME,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	dialect: process.env.PORT,
	port: process.env.PORT_NUMBER,
})
pool.connect((err, client, release) => {
	if (err) {
		return console.error('Error in connection')
	}
	client.query('SELECT NOW()', (err, result) => {
		release()
		if (err) {
			console.error('Error execution query')
		}
		console.log('Connecting to database')
	})
})
///READ
app.get('/', (req, res) => {
	const sql = 'select * from books ORDER BY id ASC'
	pool.query(sql, (err, result) => {
		if (err) {
			if (err) return res.json({ Message: 'Error inside server' })
		}
		return res.json(result)
	})
})
///READ givebook
app.get('/givebookread', (req, res) => {
	const sql = 'select * from givebooks ORDER BY id ASC'
	pool.query(sql, (err, result) => {
		if (err) {
			if (err) return res.json({ Message: 'Error inside server' })
		}
		return res.json(result)
	})
})
///READ givebook ID
app.get('/givebookread/:id', (req, res) => {
	const id = req.params.id
	const sql = `SELECT * FROM givebooks WHERE id = $1` // Adjust table name if needed
	pool.query(sql, [id], (err, result) => {
		// Wrap id in an array
		if (err) {
			console.error('Error executing SQL query:', err)
			return res.status(500).json({ error: 'Error executing SQL query' })
		}
		return res.json(result)
	})
})
///READ givebook ID
app.get('/givebookreadsort/:speciality', (req, res) => {
	// const speciality = req.params.speciality;
	const values = [req.params.speciality]
	const sql = `select * from givebooks where speciality = $1 order by id asc;` // Adjust table name if needed
	pool.query(sql, values, (err, result) => {
		// Wrap id in an array
		if (err) {
			console.error('Error executing SQL query:', err)
			return res.status(500).json({ error: 'Error executing SQL query' })
		}
		return res.json(result)
	})
})
///ADD givebook
app.post('/addgivebook', (req, res) => {
	const sql =
		'INSERT INTO givebooks (namestudent, speciality, course, phone, namebook, year, author, kol, returnbook) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *'
	const values = [
		req.body.namestudent,
		req.body.speciality,
		req.body.course,
		req.body.phone,
		req.body.namebook,
		req.body.year,
		req.body.author,
		req.body.kol,
		req.body.returnbook,
	]

	pool.query(sql, values, (err, result) => {
		if (err) {
			console.error('Error executing SQL query:', err)
			return res.status(500).json({ error: 'Error executing SQL query' })
		}
		return res.json(result.rows[0]) // Assuming you want to return the inserted user
	})
})

///UPDATE givebook
app.put('/updategivebook/:id', (req, res) => {
	const sql =
		'UPDATE givebooks SET namestudent = $1, speciality = $2, course = $3, phone = $4, namebook = $5, year = $6, kol = $7, author = $8, returnbook = $9 WHERE id = $10'
	const id = req.params.id
	const values = [
		req.body.namestudent,
		req.body.speciality,
		req.body.course,
		req.body.phone,
		req.body.namebook,
		req.body.year,
		req.body.kol,
		req.body.author,
		req.body.returnbook,
		id,
	]
	pool.query(sql, values, (err, result) => {
		if (err) {
			console.error('Error executing SQL:', err)
			return res.status(500).json({ message: 'Error inside server' })
		}
		return res.json(result)
	})
})

///DELETE givebook
app.delete('/deletegivebook/:id', (req, res) => {
	const sql = 'DELETE FROM givebook WHERE id = $1'
	const id = req.params.id
	pool.query(sql, [id], (err, result) => {
		if (err) {
			console.error('Error executing SQL:', err)
			return res.status(500).json({ message: 'Error inside server' })
		}
		return res.json(result)
	})
})
///READ ID
app.get('/read/:id', (req, res) => {
	const id = req.params.id
	const sql = `SELECT * FROM books WHERE id = $1` // Adjust table name if needed
	pool.query(sql, [id], (err, result) => {
		// Wrap id in an array
		if (err) {
			console.error('Error executing SQL query:', err)
			return res.status(500).json({ error: 'Error executing SQL query' })
		}
		return res.json(result)
	})
})

///ADD
app.post('/addbook', (req, res) => {
	const sql =
		'INSERT INTO books (name, year, datetime,author, kol, photo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
	const values = [
		req.body.name,
		req.body.year,
		req.body.datetime,
		req.body.author,
		req.body.kol,
		req.body.photo,
	]

	pool.query(sql, values, (err, result) => {
		if (err) {
			console.error('Error executing SQL query:', err)
			return res.status(500).json({ error: 'Error executing SQL query' })
		}
		return res.json(result.rows[0]) // Assuming you want to return the inserted user
	})
})
///UPDATE
app.put('/update/:id', (req, res) => {
	const sql =
		'UPDATE books SET name = $1, year = $2, datetime = $3, kol = $4, photo = $5 WHERE id = $6'
	const id = req.params.id
	const values = [
		req.body.name,
		req.body.year,
		req.body.datetime,
		req.body.kol,
		req.body.photo,
		id,
	]
	pool.query(sql, values, (err, result) => {
		if (err) {
			console.error('Error executing SQL:', err)
			return res.status(500).json({ message: 'Error inside server' })
		}
		return res.json(result)
	})
})
///DELETE
app.delete('/delete/:id', (req, res) => {
	const sql = 'DELETE FROM books WHERE id = $1'
	const id = req.params.id
	pool.query(sql, [id], (err, result) => {
		if (err) {
			console.error('Error executing SQL:', err)
			return res.status(500).json({ message: 'Error inside server' })
		}
		return res.json(result)
	})
})
app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`)
})
