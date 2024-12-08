//
//  APIResponse.swift
//  TaskManagerProyect
//
//  Created by Emmanuel Mercado on 07/12/24.
//

import Foundation

struct APIResponse: Codable {
    let message: String
    let data: [dataUser]
}

struct dataUser: Codable {
    let id: String
    let name: String
    let user: String
    let password: String
    let rol: String
    let email: String
    let supervisor: String?
}
