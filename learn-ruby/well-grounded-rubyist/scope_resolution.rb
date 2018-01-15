module M
  class C
    class D
      module N
        X = 1
      end
    end
  end
end

p M::C::D::N::X
