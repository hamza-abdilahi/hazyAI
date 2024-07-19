output "secrets" {
  value = data.hcp_vault_secrets_app.hazyai.secrets
  sensitive = true
}
