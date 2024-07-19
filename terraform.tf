terraform {
  cloud {
    organization = "hazyai"

    workspaces {
      name = "HCPVaultSecretsLab"
    }
  }
  required_providers {
    hcp = {
      source = "hashicorp/hcp"
      version = "0.91.0"
    }
  }
}

provider "hcp" {
  # Configuration options
  client_id = var.HCP_CLIENT_ID
  client_secret = var.HCP_CLIENT_SECRET
}