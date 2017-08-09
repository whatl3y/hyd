import minimist from 'minimist'
import path from 'path'
import AccountMgmt from './libs/AccountMgmt'
import FileHandler from './libs/FileHandler'
import Import from './libs/Import'
import Vomit from './libs/Vomit'
import config from './config'

// Ex. >node dist/index search -s my_search_string
const argv = minimist(process.argv.slice(2))
const [ command, second, third ] = argv._

// we want to enforce CRYPT_SECRET to be set manually
if (!config.cryptography.password) {
  Vomit.noCryptSecret()
  process.exit()
}

;(async () => {
  try {
    const extra     = argv.e || argv.extra
    const name      = argv.n || argv.name
    const password  = argv.p || argv.password
    const uid       = argv.i || argv.id || argv.uuid
    const username  = argv.u || argv.username

    switch (command) {
      case 'add':
        if (!(name || second))
          return Vomit.error('An account name (-n or --name) parameter is a required at a minimum to add a new account.')

        await AccountMgmt.addAccount(name || second, username, password, extra)
        Vomit.success(`Successfully added account '${name}'!`)

        break

      case 'delete':
        if (!uid)
          return Vomit.error('A uuid (-i or --id or --uuid) is a required to delete an account.')

        const result = await AccountMgmt.deleteAccountByUuid(uid)
        if (result)
          return Vomit.success(`Successfully deleted account with uuid: '${uid}'`)

        Vomit.error(`We didn't find an account with uuid: '${uid}'`)

        break

      case 'search':
        const searchString = argv.s || argv.search || second
        const info = await AccountMgmt.searchForAccountsByName(searchString)
        Vomit.listAccounts(info.matches, info.total)
        break

      case 'show':
        if (uid) {
          const account = await AccountMgmt.findAccountByUuid(uid)
          if (account) {
            if (!password)
              delete(account.password)
            return Vomit.listSingleAccount(account)
          }
          return Vomit.error(`We didn't find an account with uuid: ${uid}`)

        } else if (name || second) {
          const nameStringToTry = name || second
          const account = await AccountMgmt.findAccountByName(nameStringToTry)
          if (account) {
            if (!password)
              delete(account.password)
            return Vomit.listSingleAccount(account)
          }
          return Vomit.error(`We didn't find an account with name: ${nameStringToTry}`)
        }
        Vomit.error('Either a name (-n or --name) or uuid (-i or --id or --uuid) parameter is a required at a minimum to show the details for an account.')

        break

      case 'update':
        if (uid) {
          const account = await AccountMgmt.findAccountByUuid(uid)
          if (account) {
            await AccountMgmt.updateAccount(uid, {name: name, username: username, password: password, extra: extra}, account)
            return Vomit.success(`Successfully updated account with uuid: '${uid}'!`)
          }
          return Vomit.error(`We didn't find an account with uuid: ${uid}`)

        } else if (name) {
          const account = await AccountMgmt.findAccountByName(name)
          if (account) {
            await AccountMgmt.updateAccount(account.uuid, {name: name, username: username, password: password, extra: extra}, account)
            return Vomit.success(`Successfully updated account with name: '${name}'!`)
          }
          return Vomit.error(`We didn't find an account with name: ${name}`)
        }
        Vomit.error('Either a name (-n or --name) or uuid (-i or --id or --uuid) parameter is a required at a minimum to show the details for an account.')

        break

      case 'file':
        const fullPath = path.join(config.filepath, config.filename)
        Vomit.twoLinesBlueThenGreen(`Your encrypted file is in the following location:`, fullPath)
        break

      case 'import':
        const importFilePath = argv.f || argv.filepath || second
        if (importFilePath && FileHandler.doesFileExist(importFilePath)) {
          let rows = await Import.csv(importFilePath)
          const numAccounts = rows.length
          while (rows.length > 0) {
            const row = rows.shift()
            if (row.name)
              await AccountMgmt.addAccount(row.name, row.username, row.password, row.extra)
          }
          return Vomit.success(`Successfully added ${numAccounts} accounts from CSV: ${importFilePath}!`)
        }
        Vomit.error(`We can't find filepath provided: ${importFilePath || 'NO FILE PROVIDED'}`)

        break

      default:
        Vomit.error(`I don't recognize what you are trying to do.\nPlease refer to the documentation for what commands I support.`)
    }

    process.exit()

  } catch(err) {
    if (typeof err === 'string')
      Vomit.error(err)
    else
      console.error(err)
    process.exit()
  }
})()
