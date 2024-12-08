//
//  LoginView.swift
//  TaskManagerProyect
//
//  Created by Emmanuel Mercado on 07/12/24.
//

import SwiftUI

struct LoginView: View {
    @State private var username: String = ""
    @State private var password: String = ""
    @State private var userRole: UserRole? = nil
    @State private var isAuthenticated: Bool = false

    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                Text("Iniciar Sesión")
                    .font(.largeTitle)
                    .bold()
                
                TextField("Usuario", text: $username)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .autocapitalization(.none)
                    .padding(.horizontal)
                
                SecureField("Contraseña", text: $password)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding(.horizontal)
                
                Button("Login") {
                    login()
                }
                .buttonStyle(.borderedProminent)
                
                /* if let role = userRole, isAuthenticated {
                    NavigationLink(destination: homeView(for: role), isActive: $isAuthenticated) {
                        EmptyView()
                    }
                }*/
            }
            .padding()
        }
    }

    func login() {
        APIService.shared.getUser(user: username){ result in
                switch result {
                case .success(let user):
                    // Si el login es exitoso, puedes mostrar algo aquí
                    print("Bienvenido")
                case .failure(let error):
                    // Mostrar el error
                    print("Bienvenido")
                }
            }
        }

}

#Preview {
    ContentView()
}




