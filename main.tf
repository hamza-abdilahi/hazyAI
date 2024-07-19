## Configure the Vault provider
#provider "vault" {
#  address = "http://127.0.0.1:8200"  # Adjust this to match your Vault address
#}
#
## Retrieve the secret from Vault
#data "vault_kv_secret_v2" "db_password" {
#  mount = "secret"
#  name  = "apikey"
#}
#
## Output the secret
#output "db_password" {
#  value = data.vault_kv_secret_v2.db_password.data["db_password"]
#}

data "hcp_vault_secrets_app" "hazyai" {
  app_name = "hazyai"
}
