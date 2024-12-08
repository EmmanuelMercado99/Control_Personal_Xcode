//
//  APIService.swift
//  TaskManagerProyect
//
//  Created by Emmanuel Mercado on 07/12/24.
//


import Foundation

class APIService {
    static let shared = APIService() // Patrón Singleton
    
    // Método para obtener el usuario basado en su nombre de usuario
    func getUser(user: String, completion: @escaping (Result<User, Error>) -> Void) {
        // URL de la API
        guard let urlString = URL(string:"http://localhost:3001/User/searchUser?user=\(user)")
        else{
            return
        }
        
        let session = URLSession.shared.dataTask(with: urlString){(data,response,error)
            in
            
            if error == nil{
                print(data)
            }
            else{
                print(error)
            }
        }
        
        session.resume()
        
        
    }
}



