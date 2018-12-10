class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
            )

        if @user
            render 'api/users/show'
            login(@user)
        else
            render json: ['Invalid login credentials'], status: 404
        end
    end

    def destroy
        raise ActionController::RoutingError.new('404 No User Found') unless logged_in?
        logout
        render json: {}
    end
end
