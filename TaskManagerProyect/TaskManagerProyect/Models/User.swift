//
//  User.swift
//  TaskManagerProyect
//
//  Created by Emmanuel Mercado on 07/12/24.
//

import Foundation

struct User {
    var username: String
    var password: String
    var role: UserRole
}

enum UserRole {
    case superUser
    case supervisor
    case user
}




