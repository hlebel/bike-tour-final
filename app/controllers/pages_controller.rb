class PagesController < ApplicationController
  def home
  end

  def gallery
  end

  def map

  end

  def riders
    @riders = Rider.all
  end

  def ridersApi
    @riders = Rider.all

    render json: @riders
  end

  def slogansApi
    @slogans = Slogan.all

    render json: @slogans
  end

  def slogans
  end

   # POST /slogans or /slogans.json
   def create

    @slogan = Slogan.new(slogan_params)

    respond_to do |format|
      if @slogan.save
        msg = { :status => "ok", :message => "Your slogan has been submitted!" }
        format.json { render :json => msg  }
      else
        format.json { render json: @slogan.errors, status: :unprocessable_entity }
      end
    end
  end


  private

    # Only allow a list of trusted parameters through.
    def slogan_params
      params.require(:page).permit(:first_name, :last_name, :email, :suggestion)
    end
end
