
const connectionString  = "Driver={ODBC Driver 17 for SQL Server};Server=(localdb)\\node;Database=scratch;Trusted_Connection=yes;"

const sql = require('msnodesqlv8')

const query = 'SELECT top 2 * FROM syscolumns'

async function runner() {
    console.log(`using connection '${connectionString}' run query '${query}'`)
    const res = await sql.promises.query(connectionString, query)
    console.log(JSON.stringify(res, null, 4))
}

runner().then(() => {
    console.log('done.')
}).catch(e => {
    console.error(e)
})



