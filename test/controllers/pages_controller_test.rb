require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pages_home_url
    assert_response :success
  end

  test "should get gallery" do
    get pages_gallery_url
    assert_response :success
  end

  test "should get map" do
    get pages_map_url
    assert_response :success
  end

  test "should get riders" do
    get pages_riders_url
    assert_response :success
  end

  test "should get slogans" do
    get pages_slogans_url
    assert_response :success
  end
end
